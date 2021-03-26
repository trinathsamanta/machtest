export const ALL_DEPT = (data) => {
    return {
      type:"ALL_DEPT",
      payload:{data:data}
    }
}

export const ALL_EMPLOYEE = (data) => {
    return {
      type:"ALL_EMPLOYEE",
      payload:{data:data}
    }
}

export const DELETE_EMPLOYEE = (index) => {
    return {
      type:"DELETE_EMPLOYEE",
      payload:{index:index}
    }
}

export const DELETE_DEPT = (index) => {
    console.log(index,"index")
    return {
      type:"DELETE_DEPT",
      payload:{index:index}
    }
}