const END_POINT="https://learn.zone01dakar.sn"

export async function FectData(path,config){
    try {
        return  fetch(END_POINT+path, config)
            .then(async (response) => {
                if (!response.ok) {
                    return { status: false};
                }
              return {response:await response.json(),status:true};
            })
    } catch (error) {
        return { status: false, error: error };
    }
}