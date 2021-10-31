package com.robotor.domain;

import java.util.ArrayList;
import java.util.List;

public class ZattackerBuilderEngine implements RobotBuilderEngine<Zattacker> {
    @Override
    public List<Zattacker> create(int quality) {
        List<Zattacker> carriers = new ArrayList<>();
        for (int i = 0; i < quality; ++i) {
            carriers.add(new Zattacker());
        }
        return carriers;
    }
}
