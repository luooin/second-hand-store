package com.wsk.dao;

import com.wsk.pojo.GoodsCar;

import java.util.List;

public interface GoodsCarMapper {
    int deleteByPrimaryKey(GoodsCar record);

    int insert(GoodsCar record);

    int insertSelective(GoodsCar record);

    GoodsCar selectByPrimaryKey(GoodsCar record);

    int updateByPrimaryKeySelective(GoodsCar record);

    int updateByPrimaryKey(GoodsCar record);

    List<GoodsCar> selectByUid(int uid);
}