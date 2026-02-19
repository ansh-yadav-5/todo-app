function TodoItem1() {
  let todoname = "Buy milk";
  let tododate = "14/2/2026";
  
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
