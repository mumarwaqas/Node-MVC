connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
