function isTouchingAlgorithm(sprite1, sprite2){

    if((Math.abs(sprite1.x - sprite2.x) - 0.5 * (sprite1.width + sprite2.width) <= 0)
    &&(Math.abs(sprite1.y - sprite2.y) - 0.5 * (sprite1.height + sprite2.height) <= 0)){

        return true;

    }

}

function bounceOffAlgorithm(sprite1, sprite2){
    // the first one bounces off the second
    if(isTouchingAlgorithm(sprite1, sprite2)){

        sprite1.velocityX = sprite1.velocityX*-1;
        sprite1.velocityY = sprite1.velocityY*-1;
        sprite2.velocityX = sprite2.velocityX*-1;
        sprite2.velocityY = sprite2.velocityY*-1;

    }

}

function areaAlgorithm(radius){

    return radius*radius*Math.PI;

}

function areaAlgorithm(sideone, sidetwo){

    return sideone*sidetwo;

}