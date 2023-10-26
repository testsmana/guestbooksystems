package com.manacodes.guestbooksystems.controller;

import com.manacodes.guestbooksystems.model.Guest;
import com.manacodes.guestbooksystems.service.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guest")
@CrossOrigin
public class GuestController {
    @Autowired
    private GuestService guestService;

    @PostMapping("/add")
    public String add(@RequestBody Guest guest){
        guestService.saveGuest(guest);
        return "New note is added";
    }

@GetMapping("/getAll")
    public List<Guest> getAllGuests(){
        return guestService.getAllGuests();
}

}
