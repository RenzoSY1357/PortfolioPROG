package com.example.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;


@Controller
public class SiteController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("currentPage", "site");
        return "www/site/index";
    }
    
    @GetMapping("/SegundaPagina")
    public String ConocemeMas(Model model) {
        model.addAttribute("currentPage", "SegundaPagina");
        return "www/SegundaPagina/index";
    }

    @GetMapping("/site")
    public String site(Model model) {
        model.addAttribute("currentPage", "site");
        return "www/site/index";
    }
}
