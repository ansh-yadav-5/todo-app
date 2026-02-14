function TodoItem2() {
  let todoname = "Go to College";
  let tododate = "14/2/2026";
  
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
