package service.shopproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.shopproject.dao.UserDao;
import service.shopproject.model.User;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<User> searchUser(){
        return userDao.searchUser();
    }
    public List<User> searchOneUser(User user){
        return userDao.searchOneUser(user);
    }
}
