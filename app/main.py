from app import webapp


@webapp.route('/')
def hello_world():
    return 'Hello World!' \
           '            --- by 皮皮虾s: Awesome 费利克斯 && Awesome Giant Fredpan'
