/*
place meeting?
down to left
right to down
up to right
left to up
*/

if sprite_region(s_btn_cars,room_width/5,room_height-64) {
    with (instance_create(0,188,o_car_universial)) {
        state_where = 0;
        state_will = 0;
    }
    with (instance_create(road_width - 162,road_width,o_car_universial)) {
        state_where = 1;
        state_will = 0;
    }
    with (instance_create(road_width,162,o_car_universial)) {
        state_where = 2;
        state_will = 0;
    }
    with (instance_create(162,0,o_car_universial)) {
        state_where = 3;
        state_will = 0;
    }
}
else if sprite_region(s_btn_cars,room_width*2/5,room_height-64) {
    with (instance_create(0,350-138,o_car_universial)) {
        state_where = 0;
        state_will = 2;
    }
    with (instance_create(350-138,350,o_car_universial)) {
        state_where = 1;
        state_will = 2;
    }
    with (instance_create(350,138,o_car_universial)) {
        state_where = 2;
        state_will = 2;
    }
    with (instance_create(138,0,o_car_universial)) {
        state_where = 3;
        state_will = 2;
    }
}
else if sprite_region(s_btn_cars,room_width*4/5,room_height-64) {
    room_goto_next();
}

/* */
/*  */
