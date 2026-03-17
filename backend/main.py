from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="AceMind API", description="SaaS para Psicologia do Tênis")

class Atleta(BaseModel):
    id: int
    nome: str
    ranking: int
    estilo_jogo: str
    risco_emocional: str 

class RegistroDiario(BaseModel):
    atleta_id: int
    data: str
    nivel_ansiedade: int 
    foco_percebido: int 
    choking_em_pontos_importantes: bool

db_atletas = [
    {"id": 1, "nome": "Carlos Alcaraz", "ranking": 2, "estilo_jogo": "Agressivo", "risco_emocional": "verde"},
    {"id": 2, "nome": "João Silva", "ranking": 150, "estilo_jogo": "Saque e Voleio", "risco_emocional": "vermelho"}
]

@app.get("/")
def read_root():
    return {"message": "API AceMind Operacional"}

@app.get("/api/atletas", response_model=List[Atleta])
def get_atletas():
    return db_atletas

@app.post("/api/diario", status_code=201)
def registrar_diario(registro: RegistroDiario):
    return {"message": "Registro salvo com sucesso", "dados": registro}