const token = "e2990f099f38288eb9d8d20762188b84";
import axios from "axios";

export const GET_PET_INFO = async () => {

    try {
        const response = await axios({
            method: "get",
            url: `http://api-pets.fituapp.com/api/v1/pets`,
            headers: {},
            params: {
                token: token
            },
        });
        //console.log("response=> "+response)
        if (response.status === 200) {
            return ({ status: true, message: response.data });
        }
        else {
            return ({ status: false, message: response.data })
        }
    } catch (error) {
        return ({ status: false, message: error })
    }
}
export const DELETE_PET_INFO = async (id) => {
    try {
        const response = await axios({
            method: "delete",
            url: `http://api-pets.fituapp.com/api/v1/pets/${id}`,
            headers: {},
            params: {
                token: token,
            }
        })
        //console.log(response)
        if (response.status === 204) {
            return ({ status: true });
        }
        else {
            return ({ status: false, message: response.data })
        }
    } catch (error) {
        return ({ status: false, message: error })
    }
}

export const CREATE_PET_INFO = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: `http://api-pets.fituapp.com/api/v1/pets`,
            headers: {},
            params: {
                token: token,
            },
            data: data
        })
        //console.log(response)
        if (response.status === 201) {
            return ({ status: true, message: response.data });
        }
        else {
            return ({ status: false, message: response.data })
        }
    } catch (error) {
        return ({ status: false, message: error })
    }
}
export const PUT_PET_INFO = async (id, data) => {
    //console.log(id);
    try {
        const response = await axios({
            method: "put",
            url: `http://api-pets.fituapp.com/api/v1/pets/${id}`,
            headers: {},
            params: {
                token: token,
            },
            data:data
        })
        //console.log(response)
        if (response.status === 200) {
            return ({ status: true });
        }
        else {
            return ({ status: false, message: response.data })
        }
    } catch (error) {
        return ({ status: false, message: error })
    }
}
