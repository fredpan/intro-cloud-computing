from app import webapp


@webapp.route('/')
def hello_world():
    return 'Hello World!' \
           '            --- by 皮皮虾s:费利克斯大撒比 && giant handsome fredpan'
