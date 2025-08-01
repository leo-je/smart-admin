package com.je.extend.epic.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.je.extend.epic.domain.entity.JeEpicFormConfigEntity;
import com.je.extend.epic.domain.form.JeEpicFormConfigQueryForm;
import com.je.extend.epic.domain.vo.JeEpicFormConfigVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * epic表单设计器 Dao
 *
 * @Author je
 * @Date 2025-07-08 14:35:15
 * @Copyright je v1.0
 */

@Mapper
public interface JeEpicFormConfigDao extends BaseMapper<JeEpicFormConfigEntity> {

    /**
     * 分页 查询
     *
     * @param page
     * @param queryForm
     * @return
     */
    List<JeEpicFormConfigVO> queryPage(Page page, @Param("queryForm") JeEpicFormConfigQueryForm queryForm);

}
