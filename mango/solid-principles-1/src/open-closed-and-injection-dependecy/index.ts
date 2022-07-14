// Open Closed Principle - "alterar o comportamento de uma classe sem alterar a classe em si"
// Dependecy inversion - principio da inversão da dependência
// Desing Pattern Composite - é uma classe que vai compor todas as outras classes

class AddGroupController {
    constructor(
        private validation: Validation,
    ) { }
    a() {
        this.validation.validate()
    }
}

interface Validation {
    validate: () => void
}

class RequireFieldValidation implements Validation {
    validate(): void {

    }
}

class PhoneValidation implements Validation {
    validate(): void {

    }
}

// Classe que compõe todas as classes, ela mesma depende da interface Validation

class AddGroupValidationComposite implements Validation {
    constructor(
        private requireFieldValidation: RequireFieldValidation,
        private phoneValidation: PhoneValidation
    ) { }

    validate(): void {

    }
}

// Composition Root
// Dependecy Injection
const phoneValidation = new PhoneValidation()
const requireFieldValidation = new RequireFieldValidation()

const composite = new AddGroupValidationComposite(requireFieldValidation, phoneValidation)
const controller = new AddGroupController(composite)

export default AddGroupController