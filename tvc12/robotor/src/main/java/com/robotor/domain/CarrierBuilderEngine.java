package com.robotor.domain;

import java.util.ArrayList;
import java.util.List;

public class CarrierBuilderEngine implements RobotBuilderEngine<Carrier> {
    @Override
    public List<Carrier> create(int quality) {
        List<Carrier> carriers = new ArrayList<>();
        for (int i = 0; i < quality; ++i) {
            carriers.add(new Carrier());
        }
        return carriers;
    }
}
