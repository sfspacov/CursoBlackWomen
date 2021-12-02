using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using CrudMvc.Dto;

namespace CrudMvc.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPut]
        public string Update([FromBody] UsuarioDto usuario)
        {
            return "Put";
        }

        [HttpGet]
        public IActionResult GetByCpf(string cpf)
        {
            try
            {
                var u1 = new UsuarioDto
                {
                    Cpf = "111.111.111-11",
                    Name = "Ana",
                    City = "Sum Paulo",
                    IdCity = 1,
                    IdUf = 1
                };
                return Ok(u1);
            }
            catch (Exception)
            {

                return BadRequest("Não foi possivel encontrar o usuario");
            }
        }

        [HttpGet]
        public IActionResult List()
        {
            try
            {
                var usuarios = new List<UsuarioDto>();
                var u1 = new UsuarioDto
                {
                    Cpf = "111.111.111-11",
                    Name = "Ana",
                    City = "Sum Paulo",
                    IdCity = 1,
                    IdUf = 1
                };
                var u2 = new UsuarioDto()
                {
                    Cpf = "211.111.111-11",
                    Name = "Mengão",
                    City = "Rio",
                    IdCity = 4,
                    IdUf = 2
                };
                var u3 = new UsuarioDto()
                {
                    Cpf = "205.111.111-11",
                    Name = "Joao da Silva",
                    City = "Maceio",
                    IdCity = 4,
                    IdUf = 2
                };
                var u4 = new UsuarioDto()
                {
                    Cpf = "854.111.111-11",
                    Name = "Maria da Penha",
                    City = "Porto Alegre",
                    IdCity = 4,
                    IdUf = 2
                };
                var u5 = new UsuarioDto()
                {
                    Cpf = "671.111.111-11",
                    Name = "Veronica",
                    City = "Osasco",
                    IdCity = 4,
                    IdUf = 2
                };
                var u6 = new UsuarioDto()
                {
                    Cpf = "411.111.111-11",
                    Name = "Milena",
                    City = "São Paulo",
                    IdCity = 4,
                    IdUf = 2
                };
                usuarios.Add(u1);
                usuarios.Add(u2);
                usuarios.Add(u3);
                usuarios.Add(u4);
                usuarios.Add(u5);
                usuarios.Add(u6);

                return Ok(usuarios);
            }
            catch (Exception)
            {
                return BadRequest("Erro, tente novamente mais tarde");
            }
        }

        [HttpPost]
        public string Save([FromBody] UsuarioDto usuario)
        {
            return "Post";
        }

        [HttpDelete]
        public string DeleteByCpf(string cpf)
        {
            return "Delete";
        }
    }
}