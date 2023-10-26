package com.manacodes.guestbooksystems.service;
import java.util.*;
import com.manacodes.guestbooksystems.model.Guest;
import com.manacodes.guestbooksystems.repository.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuestServiceImpl implements GuestService{
    @Autowired
    private GuestRepository guestRepository;
    @Override
    public Guest saveGuest(Guest guest) {
        return guestRepository.save(guest);
    }

    @Override
    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }
}
