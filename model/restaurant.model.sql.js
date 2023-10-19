const sql = require("./db");

//constructor ตัวสร้าง object
//Restaurant เป็น class
//restaurant ตัวเล็กคือพารามิเตอร์

module.exports = Restaurant = function (restaurant) {
    //atrributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.img = restaurant.img;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name, type, img VALUES ("KFC", "Fastfood", "url")
    sql.query("INSERT INTO re SET ?", newRestaurant, (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return
        }
        //ไม่มี error
        console.log("new Restaurant cerated");
        result(null, { id: res.id, ...newRestaurant });
    });

}

//get all restaurant
Restaurant.getAll = (result) => {
    //SELECT * FROM restaurant
    sql.query("SELECT * FROM re", (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("get All restaurant");
        result(null, res);
    });
};

//
Restaurant.getById = (reId, result) => {
    //SELECT * FROM re WHERE id = restaurantId
    sql.query(
        `SELECT * FROM re WHERE id = ${reId}`,

        (err, res) => {
            //มี error เกิดขึ้น
            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }
            //ไม่มี error
            console.log("get restaurant by Id");
            if (res.length) {
                result(null, res[0]);
            }
            result({ kind: "nod_found" }, null);

        }
    );
};


//
Restaurant.deleteById = (reId, result) => {
    // DELETE FROM re WHERE id = restaurantId
    sql.query(
        `DELETE FROM re WHERE id = ${reId}`,
        (err, res) => {

            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }

            console.log("delete restaurant by Id");

            if (res.affectedRows === 1) {
                result(null, { message: "Restaurant deleted successfully." });
            } else {

                result({ kind: "not_found" }, null);
            }
        }
    );
};

//update
Restaurant.updateById = (reId, result) => {
    //UPDATE re SET nam = "name", type="type", img = "img" WHERE id = "id"
    console.log ("reId",reId,"result",result)
    sql.query(" UPDATE re SET name = ?, type=?, img = ?,  WHERE id =? ",
        [result.name, result.type, result.img, reId],
        (err, res) => {
            if (err) {
                // console.log(res);
                // result(err, null)
                return 0 ;
            }
            if (res.affectedRows === 0) {
                // result({ kind: "not_found" }, null)
                // result;
                return 0;
            }
            result(null, { id: id, ...res });
        }
    );
};



//  = Restaurant;