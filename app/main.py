from app import webapp


@webapp.route('/')
def hello_world():
    pageContent = """
    Hello World!
            <div>--- by 皮皮虾s: Awesome 费利克斯 && Awesome Giant Fredpan</div>
    """
    return pageContent
