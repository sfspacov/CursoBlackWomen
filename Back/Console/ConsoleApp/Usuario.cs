namespace ConsoleApp
{
    public class Usuario
    {
        public string Cpf { get; set; }
        public string Nome { get; set; }

        public string Salvar(Usuario usuario)
        {
            //Validar o cpf
            //Buscar pontuacao na Serasa
            //
            //Salvar na base de dados
            return $"Usuario {usuario.Nome} criado com sucesso";
        }
    }
}
