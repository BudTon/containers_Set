export class Team {
    constructor() {
        this.members = new Set();
    }

    add(unit) {
        this.members.forEach(membersObject => {
            if (membersObject.name === unit.name) {
                throw new Error('Unit is already in members');
            }
        });
        this.members.add(unit)
    };

    addAll(listAllUnit) {
        this.members = listAllUnit.reduce((target, item) => {
            return target.add(item);
        }, new Set)
    }

    toArray() {
        const listUnitALLProperty = [];
       
        this.members.forEach(membersObject => {
            const listUnitProperty = [];
            
            Object.keys(membersObject).forEach(key => {
                listUnitProperty.push(`${key} - ${membersObject[key]}`)
            })
            listUnitALLProperty.push(listUnitProperty)
        })
        return listUnitALLProperty
    }
}


// module.exports = {
//     Team
// }
