road_width = sprite_get_width(s_road);
view_shake = 0;
view_zoom = 1;

// 세팅: 도로 크기
road_xmax = 5;
road_ymax = 4;

// 세팅: 도로 종류 (전부 사거리)
for (j = 0; j < road_ymax; j += 1) {
    for (i = 0; i < road_xmax; i += 1) {
        road_arr[i,j] = 4;
    }
}

// 도로 깔기
for (j = 0; j < road_ymax; j += 1) {
    for (i = 0; i < road_xmax; i += 1) {
        switch (road_arr[i,j]) {
            case 4:
                instance_create(road_width*i,road_width*j,o_road_4);
                break
            case 3:
                instance_create(road_width*i,road_width*j,o_road_3);
                break
            case 0:
                instance_create(road_width*i,road_width*j,o_road_0);
                break
        }
    }
}

