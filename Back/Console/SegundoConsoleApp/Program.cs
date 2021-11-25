using System;
using ConsoleApp;

namespace SegundoConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite seu nome: ");
            var nome = Console.ReadLine();
            Console.WriteLine("Digite seu cpf: ");
            var cpf = Console.ReadLine();

            var novoUsuario = new Usuario();
            novoUsuario.Nome = nome;
            novoUsuario.Cpf = cpf;

            var msg = CriarUsuario(novoUsuario);

            Console.WriteLine(msg);
        }

        public static string CriarUsuario(Usuario usuario)
        {
            return usuario.Salvar(usuario);
        }
    }
}