import {postRequest, getRequest} from "/@/lib/axios.js";

export const instanceApi = {
    /**
     * 启动流程
     * @param data
     * @returns {*}
     */
startWorkFlow : (data:any) => {
    return postRequest('/flow/execute/startWorkFlow',data);
},
    /**
     * 审批流程
     * @param data
     * @returns {*}
     */
    approveTaskByInstance : (data:any) => {
        return postRequest('/flow/execute/approveTaskByInstance',data);
    },

/**
 * 办理流程
 * @param data
 * @returns {*}
 */
completeTask :(data:any) => {
    return postRequest('/flow/execute/completeTask', data);
},
    /**
     * 查询待办任务列表  @author  lovefawn
     */
    toDoPage: (query:any) => {
        return getRequest('/flow/execute/toDoPage', query);
    },

    /**
     * 查询已办任务列表  @author  lovefawn
     */
    donePage: (query:any) => {
        return getRequest('/flow/execute/donePage', query);
    },

    /**
     * 查询抄送任务列表  @author  lovefawn
     */
    copyPage: (query:any) => {
        return getRequest('/flow/execute/copyPage', query);
    },

    /**
     * 查询实例已办列表  @author  lovefawn
     */
    doneList: (instanceId:string) => {
        return getRequest(`/flow/execute/doneList/${instanceId}`);
    },

    /**
     * 查询跳转节点列表  @author  lovefawn
     */
    anyNodeList: (instanceId:string) => {
        return getRequest(`/flow/execute/anyNodeList/${instanceId}`);
    },

    /**
     * 任务操作（转办/加签/委派/减签）  @author  lovefawn
     */
    interactiveType: (params:any) => {
        return postRequest('/flow/execute/interactiveType', params);
    },

    // 查询用户列表-转办|加签|委派|减签
    interactiveTypeEmployeeEntity:(query:any) => {return getRequest('/flow/execute/interactiveTypeEmployeeEntity', query);
    },

    /**
     * 通过ID查询任务详情  @author  lovefawn
     */
    getTaskById: (taskId:string) => {
        return getRequest(`/flow/execute/getTaskById/${taskId}`);
    },

    /**
     * 激活流程实例  @author  lovefawn
     */
    active: (instanceId:string) => {
        return getRequest(`/flow/execute/active/${instanceId}`);
    },

    /**
     * 挂起流程实例  @author  lovefawn
     */
    unActive: (instanceId:string) => {
        return getRequest(`/flow/execute/unActive/${instanceId}`);
    },
}