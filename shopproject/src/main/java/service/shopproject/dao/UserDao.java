package service.shopproject.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import service.shopproject.model.User;

import java.util.List;

@Repository
@Mapper
public interface UserDao {
    @Select("select * from user")
    List<User> searchUser();


    @Select("select * from user where userName=#{userName} and passWord=#{passWord}")
    List<User> searchOneUser(User user);
}
