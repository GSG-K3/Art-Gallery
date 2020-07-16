
INSERT INTO users (name ,email_adress,url,phone_number,password,role,rate)
VALUES ('bebo','examble@examble.com','','0975387267','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.9),
        ('somya','somya@gmail.com','','548999968','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.8),
        ('beno' ,'beno@gmail.com','','968564746','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.8);

INSERT INTO artwork (title,artist_id,photo_url,description,price,category,size,sold,type)
VALUES ('اغسل وجهك',
        1,
        'https://ae01.alicdn.com/kf/HTB15JACH7SWBuNjSszdq6zeSpXac.jpg',
        'لوحه تبين اهميه غسل الوجه يوميا فعدم عشل الوجه يؤدي ال تلونه بألوان اللتي تراها... هذه اللوحه',
        400,
        'لوحات زيتيه',
        '90 X 200 cm',
        false,
        'customize'),
        ('الزهور',
        2,
        'https://cdn.shopify.com/s/files/1/1903/8473/articles/how-to-choose-the-right-canvas-for-oil-or-acrylic-painting-404164.jpg?v=1563476962',
        'يعني ما بدها وصف مبينه رسمه ازهار ثلاثيه الابعاد جميله و ما عليها كلام اشتريها ما بتندم'
        ,300,
        'لوحه ثلاثيه الابعاد',
        '150 X 100',
        false,
        'customize'),
        ('بهجه الشتاء',
        3,
        'https://images.saatchiart.com/saatchi/938213/art/6613729/5683399-IDMJXSJY-7.jpg',
        'الوان المظلات الجميله تعطي طابع دافئ في يوم ماطر و كئيب',
        350,
        'لوحه زيتيه',
        '120 X 80 cm',
        false,
        'customize');
