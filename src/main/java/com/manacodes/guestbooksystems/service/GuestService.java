package com.manacodes.guestbooksystems.service;

import com.manacodes.guestbooksystems.model.Guest;

import java.util.List;

public interface GuestService {
    public Guest saveGuest(Guest guest);
    public List<Guest> getAllGuests();
}
