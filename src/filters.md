dashboard.crud.fields
delete.user : boolean, id
before.update.options : inputs
disclosable.options : string[]
login.fields : fields[]
register.fields : fields[]
api.scopes: string[]
login.roles.allowed: string[]
register.crud: string
dashboard.forms: array[], string, integer
dashboard.save.forms: Response
signed.url: string, Request
dashboard.menus: menu[]
disclose.options: boolean, string
dashboard.settings: array, string
dashboard.tabs: string array
public.fields: array string
dashboard.crud.validation: array, string, FormRequest
dashboard.user.registration: array
options.validation.rules: array
profile-security.validation.rules: array
register.validation.rules: array
profile-general.validation.rules: array
before.register: boolean, FormRequest, OptionService
crud.entry: EloquentModel, {namespace=string}[]