package service.shopproject.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.shopproject.model.User;
import service.shopproject.service.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value ="login" )
    public JSONObject getUserList(){
        String jsonStr="{\"code\":20000,\"data\":{\"items\":" +
                JSON.toJSONString(userService.searchUser())
                + "}}";
        return JSONObject.parseObject(jsonStr);
    }

    @GetMapping(value = "loginq")
    public List<User> verifyUser(@RequestBody User user){
        List<User> uname=userService.searchOneUser(user);
        return uname;
    }
}
