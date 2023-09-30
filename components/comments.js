


function Comments({ comments }) {
    return (
      <div className="flex flex-col gap-4 mt-4 text-black">
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-col gap-2 text-left comment">
            <div className="flex items-center gap-1 comment-user">
              <img src={comment.user.avatar} alt={`Avatar de ${comment.user.name}`} />
              <span>{comment.user.name}</span>
            </div>
            <div className="rounded-sm bg-slate-300">
            <span className="comment-text ps-9">{comment.text}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Comments;