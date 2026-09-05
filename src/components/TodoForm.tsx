export const TodoForm = () => {
    return (
        <div className="row g-3">
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="Add new task"/>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-primary mb-3">Add task</button>
            </div>
        </div>
    );
}