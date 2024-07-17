package com.wsk.service;

import com.wsk.pojo.GoodsCar;

import java.util.List;

/**
 * Created by wsk1103 on 2017/5/13.
 */
public interface GoodsCarService {
    int deleteByPrimaryKey(GoodsCar record);

    int insert(GoodsCar record);

    int insertSelective(GoodsCar record);

    GoodsCar selectByPrimaryKey(GoodsCar record);

    int updateByPrimaryKeySelective(GoodsCar record);

    int updateByPrimaryKey(GoodsCar record);

    List<GoodsCar> selectByUid(int uid);
}
