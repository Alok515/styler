export const userStore = defineStore("user", () => {
    
    const user = reactive<User>({
        name: "",
        email: "",
        password: "",
    });

    const setUser = (userParams: User) => {
        Object.assign(user, userParams);
        console.log("User Saved in Store");
    }

    const clearStore = () => {
        Object.assign(user, {
            name: "",
            email: "",
            password: "",
        });
    }

    return {
        user,
        setUser,
        clearStore
    };
})