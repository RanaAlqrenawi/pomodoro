QUnit.test("Function `startTime` should exist", function(t) {
  t.ok(window.startTime,'it exists');
});

QUnit.test("Function `AddZero` should exist", function(t) {
  t.ok(window.AddZero,'it exists');
});

QUnit.test("Function `setMinutes` should exist", function(t) {
  t.ok(window.setMinutes,'it exists');
});

QUnit.test("Function `stop` should exist", function(t) {
  t.ok(window.stop,'it exists');
});

// QUnit.test("Function `startTime` should return n number", function (t) {
// 	var initial = startTime(2*60);
//   	t.ok(isNaN(initial)==true, 'Function startTime returns a Number.');
// });

// QUnit.test("Function `splitUrl` should return an array", function (t) {
//   t.ok(Array.isArray(splitUrl1('https://www.google.com')) === true, 'it\'s an array');
// });

// test("Method addTask() exist",function(t){
//   var a = todo();
//   t.equal(a.hasOwnProperty('addTask'),true, "it exist")
// });
//
// test("Should save the task internally",function(t){
//   var a = todo();
//   var b = a.addTask("First Task");
//   t.deepEqual(a._list,[{text:"First Task",id:1}],"it exist");
// });
//
// test("Should save the task internally",function(t){
//   var a = todo();
//   var b = a.addTask("Second Task");
//   t.deepEqual(a._list,[{text:"Second Task",id:1}],"it exist");
// });
//
// test("should save two task internally",function(t){
//   var a = todo();
//   a.addTask("First Task");
//   a.addTask("Second Task");
//   t.deepEqual(a._list,[
//     {text:"First Task",id:1},
//     {text:"Second Task",id:2}
//   ], "Both have differnt id")
// });
// test("Method done () should delete a task",function (t){
//     var a = todo();
//     a.addTask("First Task");
//     a.addTask("Second Task");
//     a.done(1);
//     t.deepEqual(a._list,[
//       {text:"Second Task",id:2}
//     ],"First Task Deleted")
// });
//
// test("check showList return not completed tasks",function(t){
//   var a = todo();
//   a.addTask("First Task");
//   var unCompleted = a.showList();
//     t.deepEqual(unCompleted,
//       [{text:"First Task",id:1}
//     ],"show un Completed task")
// })
