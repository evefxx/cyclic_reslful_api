
- run server = nodemon server.js
- database = dahttp://localhost:3000/res
- swagger = http://localhost:3000/api-docs/
- https://vercel.com/dashboard

# การเอาเว็บขึ้น server host

## controllers

**Restaurant**

- restaurant.controller.js
  - Import Model:
    โค้ดเริ่มต้นด้วยการ import Restaurant model ที่อยู่ในไฟล์ restaurant.model ซึ่งมีไว้สำหรับการเชื่อมต่อและจัดการกับข้อมูลร้านอาหารในฐานข้อมูล.

    [![2023-08-16-112905.png](https://i.postimg.cc/cJdZs9gC/2023-08-16-112905.png)](https://postimg.cc/xXpB5PPV)

  - Insert Data (createRestaurant):
    ในฟังก์ชัน createRestaurant จะทำการสร้างข้อมูลร้านอาหารใหม่โดยใช้ Restaurant.create(newRestaurant) และคืนค่าข้อมูลที่ถูกสร้างกลับไป หากสำเร็จ.

    [![2023-08-16-113333.png](https://i.postimg.cc/Lhd5vtyP/2023-08-16-113333.png)](https://postimg.cc/BPgJnKfZ)

  - Get All Restaurants (getAll):
     ฟังก์ชัน getAll ใช้สำหรับดึงข้อมูลร้านอาหารทั้งหมดจากฐานข้อมูล โดยใช้ Restaurant.findAll({}) และจะแสดงผลลัพธ์ในรูปแบบของ JSON Array.

    [![2023-08-16-113441.png](https://i.postimg.cc/Z5bBQcbP/2023-08-16-113441.png)](https://postimg.cc/YhPCGQmj)

  - Get Restaurant by ID (getOne):
    ในฟังก์ชัน getOne จะดึงข้อมูลร้านอาหารตาม ID ที่กำหนด โดยใช้ Restaurant.findOne({}) และจะคืนข้อมูลร้านอาหารที่พบในรูปแบบ JSON หากพบ หรือคืนค่า null หากไม่พบ.

    [![2023-08-16-113528.png](https://i.postimg.cc/sgLjJ9vg/2023-08-16-113528.png)](https://postimg.cc/MnyJ6B7C)

  - Update Restaurant (updateTable):
    ฟังก์ชัน updateTable ใช้สำหรับอัปเดตข้อมูลร้านอาหารโดยใช้ Restaurant.update(updates, { where: { id: restaurantId } }) โดยคืนค่าผลลัพธ์การอัปเดต.

    [![2023-08-16-113602.png](https://i.postimg.cc/wxFdVcrY/2023-08-16-113602.png)](https://postimg.cc/Yj4V2gkd)

  - Delete Restaurant (Delete):
    ฟังก์ชัน Delete ใช้สำหรับลบข้อมูลร้านอาหารตาม ID ที่กำหนด โดยใช้ Restaurant.destroy({ where: { id: restaurantId } }) และจะคืนค่าจำนวนแถวที่ถูกลบ หากไม่พบข้อมูลร้านอาหาร จะคืนค่า null.

    [![2023-08-16-113647.png](https://i.postimg.cc/Hnbz62YD/2023-08-16-113647.png)](https://postimg.cc/sGD5X5Gw)

  - Export Model:
    ท้ายที่สุดของไฟล์ มีการ export Restaurant model เพื่อให้สามารถนำไปใช้งานในส่วนอื่น ๆ ของแอปพลิเคชันได้.

    [![2023-08-16-113747.png](https://i.postimg.cc/sgGYmmwn/2023-08-16-113747.png)](https://postimg.cc/PChvrWGZ)

# Router

- restaurant.router.js
  - มีการ import modules
  - มีการวร้าง express.Router() ถูกเรียกเพื่อสร้าง Router instance เพื่อจัดการเส้นทางของแอปพลิเคชัน เป็นเหมือน "ตัวกลาง"
  
  ![2023-08-16-110730.png](https://i.postimg.cc/hPKq87j7/2023-08-16-110730.png)

  - การกำหนดเส้นทาง:
คำสั่ง .get(), .post(), .put() และ .delete() ถูกใช้เพื่อกำหนดเส้นทางและการจัดการกับ HTTP requests ต่าง ๆ
    - .get(): ใช้เพื่อรับข้อมูล (เช่น หน้าเว็บ) จาก server.
    - .post(): ใช้เพื่อส่งข้อมูลไปยัง server.
    - .put(): ใช้เพื่ออัปเดตข้อมูลที่มีอยู่บน server.
    - .delete(): ใช้เพื่อลบข้อมูลบน server.
- การใช้ Controller:
Restaurant module ถูกเรียกในการ import เพื่อใช้ Controller ที่ไว้จัดการกับการทำงานต่าง ๆ เกี่ยวกับร้านอาหาร เช่นการดึงข้อมูล, การสร้างร้านอาหารใหม่, การอัปเดตข้อมูลร้านอาหาร, และการลบร้านอาหาร

    [![2023-08-16-111628.png](https://i.postimg.cc/B6vK1vFW/2023-08-16-111628.png)](https://postimg.cc/2qP6srTT)

    [![2023-08-16-111753.png](https://i.postimg.cc/nL32Xrz7/2023-08-16-111753.png)](https://postimg.cc/sBZ78V5D)

    [![2023-08-16-111909.png](https://i.postimg.cc/3xnmB6TQ/2023-08-16-111909.png)](https://postimg.cc/RWJWCghg)

# config

- dbconfig.js

  **เป็นการเชือมต่อกับฐานข้อมูล**

  - host = ชื่อโฮสต์ของเซิร์ฟเวอร์ฐานข้อมูล MySQL ที่คุณกำลังใช้ ในกรณีนี้คือ "localhost"
  - user = ชื่อผู้ใช้ที่คุณจะใช้เข้าสู่ระบบ MySQL เพื่อเชื่อมต่อกับฐานข้อมูล ในกรณีนี้คือ "root" ซึ่งเป็นผู้ใช้ระดับสูงสุดในระบบ MySQL
  - password = คือรหัสที่ระบุในค่า user แต่ในที่นี่ไม่ได้ระบุ

  - db = ชื่อฐานข้อมูลในที่นี่คือ restaurant

    [![2023-08-16-092619.png](https://i.postimg.cc/kgdybjZC/2023-08-16-092619.png)](https://postimg.cc/CzmDy4Sr)

# Model

- db.js

  - เป็นการเชื่อมฐานข้อมูล mysql ผ่าน Sequelize จะต้องมีการ impost class Sequelize จากไลบรารี sequelize และกำหนดค่าสำหรับการเชื่อมฐานข้อมูลจากไฟล์ dbconfig

  - สร้างอินสแตนซ์ของ Sequelize โดยใช้ข้อมูลการกำหนดค่าที่คุณได้จาก dbconfig

  - ประกาศฟังก์ชัน testConnection เพื่อทดสอบการเชื่อมต่อกับฐานข้อมูล ถ้าสามารถเชื่อมต่อได้สำเร็จ คุณจะแสดงข้อความ "Connection has been established successfully" ผ่านคำสั่ง console.log

  - การเรียกใช้ฟังก์ชัน testConnection เพื่อทดสอบการเชื่อมต่อกับฐานข้อมูล module.exports = sequelize; เพื่อให้สามารถนำไปใช้ในโมดูลอื่นๆ

    [![2023-08-16-094848.png](https://i.postimg.cc/X7vTGYR3/2023-08-16-094848.png)](https://postimg.cc/s1tnbsf0)
