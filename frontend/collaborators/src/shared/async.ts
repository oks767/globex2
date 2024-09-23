import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  fullname: string;
  position_date: string;
  id: string;
}

const usersAll = createAsyncThunk<User[], void, { rejectValue: string }>('users/fetchUsersAll', 
    async (_, thunkAPI) => {
      try {
        const response = await axios.get<User[]>('../../../collaborators/backend/server.html');  
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as any).message);
      }
    }
  )

export default usersAll