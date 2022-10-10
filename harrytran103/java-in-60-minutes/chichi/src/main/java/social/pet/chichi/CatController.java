package chichi.src.main.java.social.pet.chichi;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatController {

        @GetMapping("/")
        public String home() {
                return "Xin chào 🇻🇳";
        }

        @GetMapping("/cats")
        public ArrayList<Cat> cats() {
                ArrayList<Cat> cats = new ArrayList<Cat>();
                cats.add(new Cat("add15083-5f71-4c6d-8748-a0334e4eb4d8", "Dog", "white"));
                cats.add(new Cat("5cdd2794-4150-46f6-949b-f976d74878e5", "Kiki", "black & white"));
                cats.add(new Cat("9469568c-8bf7-41cf-9a35-051fba5bebea", "Lily", "yellow"));
                cats.add(new Cat("0f71065d-942d-4495-bd1b-a8019ebaf02f", "Alex", "red"));
                cats.add(new Cat("a80f6a3e-d31a-4a26-959d-94a1cec5c671", "Chichi", "green"));
                return cats;
        }

}
