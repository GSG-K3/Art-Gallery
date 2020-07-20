
INSERT INTO users (name ,email_adress,url,phone_number,password,role,rate)
VALUES ('bebo','examble@examble.com','','0975387267','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.9),
        ('somya','somya@gmail.com','','548999968','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.8),
        ('beno' ,'beno@gmail.com','','968564746','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','artist',4.8),
        ('duha','duha@gmail.com','','566887555','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','client',0),
        ('abood','abood@gmail.com','','566887555','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','client',0);

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
        'customize'),
        ('خرابيش',
        3,
        'https://www.artmajeur.com/medias/standard/r/e/retne/artwork/12949433_rich-textured-abstract-painting-faith-and-trust-19.jpg',
        'لوحه تجسد معاناة اهل الحبشه في رحلتهم الشاقه نحو الفضاء',
        500,
        'لوحه زيتيه',
        '50 X 70 cm',
        false,
        'sell'),
        ('بلوره السماء',
        2,
        'https://www.bohaglass.co.uk/wp-content/uploads/2019/07/Glass_Artwork_Blue_Confetti.jpg',
        'بلوره زجاجيه ملونه بألوان الفضاء تأخذك الى عالم مليئ بالغموض',
        300,
        'حرف',
        '17 cm',
        false,
        'sell');

INSERT INTO cart (artwork_id,client_id)
        VALUES (1, 5),
                (3 , 5);


