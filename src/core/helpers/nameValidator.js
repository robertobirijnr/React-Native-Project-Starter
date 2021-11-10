export default function nameValidator(name) {
    if (!name) return "Name field can not be empty"
    if (name.length < 2) return "Name should be more than 2 charactors"
    return ''
}