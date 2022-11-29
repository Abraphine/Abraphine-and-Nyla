var currentScene = 1;

var font = createFont("serif");

var currentScene = 2;

background (252, 111, 153); 

fill (23, 22, 23);
textFont(font);
textSize(20);
text ("SQUID GAME!", 150, 50);
text ("In this game you will chose your destiney!", 40, 100);
textSize (20);
fill (18, 17, 18);
text ("By: Nyla Hayward-Gibbs", 100, 310);



// BITMOJI

var drawBody = function (bodyX,bodyY,size)
{
noStroke();
    size = size/100;
fill (125, 65, 0); // skin tone
ellipse (size*100+bodyX,size*100+bodyY,83*size,100*size); // head
fill (255,255,255);

fill (13, 12, 12); // hair color
quad (bodyX+105*size, bodyY+53*size,bodyX+61*size, bodyY+128*size, bodyX+28*size, bodyY+170*size,bodyX+38*size,bodyY+57*size); // left hair
quad (bodyX+168*size, bodyY+154*size,bodyX+188*size, bodyY+83*size, bodyX+113*size,bodyY+52*size,bodyX+106*size,bodyY+66*size); // right hair
ellipse (bodyX+99*size, bodyY+61*size, 60*size, 24*size); // top hair

fill (5, 5, 5); // eye color
ellipse (bodyX+90*size,bodyY+100*size,10*size,10*size); // left eye
ellipse (bodyX+117*size,bodyY+100*size,10*size,10*size); // right eye

stroke(20, 18, 18); // nose line
fill (100, 50, 0); // nose color
bezier (bodyX+100*size,bodyY+100*size,bodyX+121*size,bodyY+122*size,bodyX+92*size,bodyY+120*size,bodyX+96*size,bodyY+115*size); // nose

//fill (245, 233, 233); // teeth
arc (bodyX+103*size, bodyY+125*size, 30*size, 13*size, 1, 180); // mouth 
//line (86, 124, 119, 124); // top of mouth

};

// DRAW SHIRT

var drawShirt = function (bodyX,bodyY,size)
{
    size = size/100;
fill (20, 18, 20); // tshirt color
rect(bodyX+70*size, bodyY+148*size, 60*size, 60*size); // t shirt
triangle(bodyX+103*size, bodyY+148*size, bodyX+56*size, bodyY+186*size,bodyX+ 71*size, bodyY+148*size); // left sleeve
triangle (bodyX+95*size,bodyY+148*size,bodyX+130*size,bodyY+148*size,bodyX+147*size,bodyY+186*size); // right sleeve
};

// DRAW BODY
var drawBitmoji = function (bodyX,bodyY,size){
    drawBody (bodyX,bodyY, size);
    drawShirt (bodyX,bodyY, size);
};

// Bitmoji Label



var drawbitmoji = function(xPos,yPos,bitmojiHeight)
{
// draw bitmojiHead 
noStroke();
fill(158, 89, 14); //fill to skin tone
ellipse(xPos,yPos,bitmojiHeight/100*83,bitmojiHeight/100*100); //head
fill(255, 255, 255);
arc(xPos-(bitmojiHeight/100*42),yPos+(bitmojiHeight/100*37),bitmojiHeight/100*28,bitmojiHeight/100*49,0,361); //left chisel
arc(xPos+(bitmojiHeight/100*42),yPos+(bitmojiHeight/100*37),bitmojiHeight/100*28,bitmojiHeight/100*47,0,361);// right chisel

//hair
fill(0, 0, 0);//grey hair
ellipse (xPos-(bitmojiHeight/100*30),yPos-(bitmojiHeight/100*46),bitmojiHeight/100*74,bitmojiHeight/100*70);// left puff
ellipse (xPos+(bitmojiHeight/100*40),yPos-(bitmojiHeight/100*46),bitmojiHeight/100*74,bitmojiHeight/100*70);// right puff
ellipse (xPos+(bitmojiHeight/100*700),yPos-(bitmojiHeight/100*2),bitmojiHeight/100*40,bitmojiHeight/100*300);//top puff
//glasses
ellipse (xPos,yPos-(bitmojiHeight/100*37),bitmojiHeight/100*62,bitmojiHeight/100*28);//black for glasses
stroke(0,0,0); //stroke for glasses
fill(158,89,14); //fill to skin tone for around eye in glasses
ellipse(xPos-(bitmojiHeight/100*15),yPos,bitmojiHeight/100*25,bitmojiHeight/100*14);//glasses left
ellipse(xPos+(bitmojiHeight/100*18),yPos,bitmojiHeight/100*25,bitmojiHeight/100*14); //glasses right
line(xPos+(bitmojiHeight/100*5),yPos-(bitmojiHeight/100*2),xPos-(bitmojiHeight/100*2),yPos-(bitmojiHeight/100*2)); //glasses nose bridge
line(xPos-(bitmojiHeight/100*41),yPos-(bitmojiHeight/100*5),xPos-(bitmojiHeight/100*25),yPos-(bitmojiHeight/100*2)); //glasses side left
line(xPos+(bitmojiHeight/100*28),yPos-(bitmojiHeight/100*2),xPos+(bitmojiHeight/100*41),yPos-(bitmojiHeight/100*50)); //glasses side right

//Eyes
fill(115, 23, 23); //brown eyes fill
ellipse (xPos-(bitmojiHeight/100*10),yPos,bitmojiHeight/100*6,bitmojiHeight/100*4); //left eye
ellipse (xPos+(bitmojiHeight/100*17),yPos,bitmojiHeight/100*6,bitmojiHeight/100*4); //right eye

//Nose
fill(156, 90, 19); //fill to skin tone
bezier (xPos,yPos,xPos+(bitmojiHeight/100*21),yPos+(bitmojiHeight/100*22),xPos-(bitmojiHeight/100*8),yPos+(bitmojiHeight/100*20),xPos-(bitmojiHeight/100*4),yPos+(bitmojiHeight/100*15)); //nose

//Mouth
fill (255,255,255);//white fill for teeth
arc(xPos+(bitmojiHeight/100*3), yPos+(bitmojiHeight/100*25), bitmojiHeight/100*30, bitmojiHeight/100*13,1, 180);// mouth
line(xPos-(bitmojiHeight/100*14),yPos+(bitmojiHeight/100*24),xPos+(bitmojiHeight/100*19),yPos+(bitmojiHeight/100*24)); //top of mouth


//Cap
fill(242, 233, 233);//cap color
quad(xPos-(bitmojiHeight/100*10),yPos-(bitmojiHeight/100*40),xPos+(bitmojiHeight/100*48),yPos-(bitmojiHeight/100*13),xPos+(bitmojiHeight/100*74),yPos-(bitmojiHeight/100*75),xPos+(bitmojiHeight/100*9),yPos-(bitmojiHeight/100*90));//cap
fill(222, 139, 31); //cap lines
line(xPos+(bitmojiHeight/100*44),yPos+(bitmojiHeight/100*39),xPos+(bitmojiHeight/100*48),yPos-(bitmojiHeight/100*24));// cap line one
line(xPos+(bitmojiHeight/100*41),yPos+(bitmojiHeight/100*48),xPos+(bitmojiHeight/100*43),yPos-(bitmojiHeight/100*25));//cap line two
line(xPos+(bitmojiHeight/100*51),yPos+(bitmojiHeight/100*39),xPos+(bitmojiHeight/100*48),yPos-(bitmojiHeight/100*23));//cap line three

//Body
fill(31, 25, 25);// gown color
quad(xPos-(bitmojiHeight/100*13),yPos+(bitmojiHeight/100*88),xPos-(bitmojiHeight/100*64),yPos+(bitmojiHeight/100*84),xPos-(bitmojiHeight/100*47),yPos+(bitmojiHeight/100*25),xPos+(bitmojiHeight/100*8),yPos+(bitmojiHeight/100*63));//left gown
quad(xPos+(bitmojiHeight/100*59),yPos+(bitmojiHeight/100*32),xPos+(bitmojiHeight/100*63),yPos+(bitmojiHeight/100*93),xPos-(bitmojiHeight/100*9),yPos+(bitmojiHeight/100*87),xPos-(bitmojiHeight/100*15),yPos+(bitmojiHeight/100*48));// right gown
fill(255, 179, 0);//strap
rect(xPos-(bitmojiHeight/100*31),yPos+(bitmojiHeight/100*34),bitmojiHeight/100*10,bitmojiHeight/100*114,23); //left strap
rect(xPos+(bitmojiHeight/100*18),yPos+(bitmojiHeight/100*34),bitmojiHeight/100*10,bitmojiHeight/100*116,23); //right strap

};

var drawAbbyBitmoji = function(xPos,yPos,bitmojiHeight){
    drawbitmoji(xPos,yPos,bitmojiHeight);
};


drawAbbyBitmoji(95,184,62);
drawBitmoji (195, 103,73);







 
