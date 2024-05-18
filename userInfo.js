const createUserProfiles = (origName, modName) => {
    return origName.map((name, index) => ({
        originalName: name,
        modifiedName: modName[index],
        id: index + 1
    }))
}


  