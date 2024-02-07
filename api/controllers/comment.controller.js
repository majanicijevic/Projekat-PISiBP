import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'Nije Vam dozvoljeno da komentarisete')
      );
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, 'Komentar nije pronadjen'));
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export const editComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, 'Komentar nije pronadjen'));
    }
    if (comment.userId !== req.user.id && !req.user.isNovinar) {
      return next(errorHandler(403, 'Nije Vam dozvoljeno da menjate ovaj komentar'));
    }

    const editedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      {
        content: req.body.content,
      },
      { new: true }
    );
    res.status(200).json(editedComment)
  } catch (error) {
    next(error);
  }
}

export const deleteComment = async (req, res, next) => {

  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, 'Komentar nije pronadjen'));
    }
    if (comment.userId !== req.user.id && !req.user.isNovinar) {
      return next(errorHandler(403, 'Nije Vam dozvoljeno da obrisete komentar'));
    }
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json('Komentar je obrisan');
  } catch (error) {
    next(error);
  }

}