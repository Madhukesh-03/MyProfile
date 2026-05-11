const formFields = [
    "name",
    "email",
    "message"
];

formFields.forEach((id) => {

    const field =
        document.getElementById(id);

    const savedValue =
        localStorage.getItem(id);

    if (savedValue) {

        field.value = savedValue;

    }

    field.addEventListener("input", () => {

        localStorage.setItem(
            id,
            field.value
        );

    });

});