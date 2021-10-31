package com.robotor.domain;

import java.util.ArrayList;
import java.util.List;

public class PedionBuilderEngine implements RobotBuilderEngine<Pedion> {
    @Override
    public List<Pedion> create(int quality) {
        List<Pedion> carriers = new ArrayList<>();
        for (int i = 0; i < quality; ++i) {
            carriers.add(new Pedion());
        }
        return carriers;
    }
}
