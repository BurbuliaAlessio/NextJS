import { User } from "@/model/user.model"
import { getUser } from "./api";

const isAuth = async () => {
    const users: User[] = await getUser();

    users.filter((user) => {
        if ((user.role).toLowerCase() === "dministrator") {

        }
    })
}
