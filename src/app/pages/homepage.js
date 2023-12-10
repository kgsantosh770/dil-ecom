import Button from "../components/button"
import CardsGrid from "../components/cardsgrid";
import ShopSection from "../components/shopsection"

const Homepage = () => {
    const bannerImage = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAD4QAAIBAwMBBQYEBAMIAwAAAAECAwAEEQUSITEGE0FRYRQiMnGBkUKhscEVI9HwUlPxJDNDYnKCkuEHorL/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQAG/8QAKBEAAgIBBAEEAwADAQAAAAAAAAECAxEEEiExQQUTIlEUMmGhsdEj/9oADAMBAAIRAxEAPwCiOMDFTW7YAqKQ5rhX2ms+XRegxmr5qaNqXxTgDBoqGTd0pDG7woNzRUZ9yl7SbTyaliuAPEUuURsZhTCoZjgVp7gYODQE11lsZoq4NsRbYkE5ycVwy0Os/PWuzNkdasKOGVXyY6nwrkK3Q1rvRnmpFkBogGiC4t8rmk13a4yasZUuMYqC4sTItHCxIW0VFlwSKZ6bJ3dFNpJ35waOm0Rre0juoXEsBO1yq8ofI/selMssjJYZ0ZOLydrNvUc1HNJgE0PtaPrWnYkVXVWC07k0ERT805sLlVUZIqth9vNdx3bhsA0FtO5EV3OMi9292mAB40U1wgHJFVjTp2wCxrrULxwPdNY09J8sI2I3pxyWNWSQ9RW5Y0UVWLLUnDDceacJdGUDnmk2aecGFCakSsu41pTsNdLwMmg55SpGKFJvgd0MHkylJ75iCcUfBJuTmgb7G406hbZHTeUJZgxcmsokxKxzmt1pqawVHU8iaRsUFNKQeDRm3fWn04yDIGauJpdmbtb6AI7pt3WmdlcZHJoZdLkDcLRsFi6r0xUT2NcERhNPkye4681CLph41ObCUnlanh0hn6rQKUIrkLEmwQXTHoetcKXZjkVYLDs8ZphE7bV6ltuSB8h407uuz+lIrrHDdAwqN0qHdubxznpS3q6ocCrWovDKfbafe3UbyWltJMsZw5QZ28Z5oeNmbpV900Nboq6bBtTBDMcfzPU+dC6vYW8q2rLbtBMqbHTbgYHTH9+NKhrlKWGhdct8sIp2xyelEwRt4irJbaMJQNiFsnAx51ONJRc+70opayPgd7TfQijBA6V27+GKe/w1MgZQZ495gB+dcQadBcsywSxSOvVA2D+fX6UH5CfILqa7EYA/w1PaXrWkrZQSRuNskbdHFOhpODhlwR4GtnSEZfeXjzHUf1ofyIPhgSol2V3UdPSOMXFoS9m56kZMZP4T+xpebfIOFNXrTbJrG4IZFkt5RtdDyrCt33ZZVuAtnJEyScpG0gV1Hlz1+dPhqMrgD23nB5vNEyn4TUun6fPdGZ4lB7hO8dScHbnBI+VXC47PPHIY5o2Rx1Vhg0TolgthqCyOMxuDFIP+VuDXfmxztLEdK8biv2duyoMj7eNST2e4EtT65sfY5pIDglDjPn60JImRyKzpah72jRhV8UVmWIxN7tMtNkc4zU8tsjP4UZa2qoPCpsuTjhh11tM28mE5oVv5nNFzpkcUuZihpFXPRYlLHDD7ccYqO8h3DI61HDKcdamD7+Dmiw4yySmmhQwZGIIrKYyQru5FZVlWLADTKpCfeFP7KFXUetV+AguBVr0iPdGDV294Rn6dpvB0bVBzis7tFOMUykiwhpXcgqflVWM2y5KCRL3UdE2yIP8AWlccp3c8Ufb211fbVilSKJjtaQgk/IVE+uWVrbFXFssenwRyWpulnjjKbdoBByfU+dSzTTx+/LblkLge7z9x8qF0uyktrQWxuYmZHPv58OoyM9fWjp9Ris4IVlVt+SgOz4WA8/DOc/WqkYKecvr/ACYUm28sGv1XED92mN2AfwgHwHzxmjGRLmFGQRmRAQhxwCPD68UpuJbowSSgd4juCVeLdjGfyrjTXmME++6UTldwA97aD5Uh57yQm10MbeZHiULKqNn4MY94cg/lQxCbAzuvLbdxPFK7m3iihVYJHLI28MM8nHGf78KWX2oyrJHsJaEZ9xgcI3nimVxbfDH13zrzhlphS1kkWGbMZ6NlgQW8eKhlgYP3TocAkLnrx448KpserS+1q0zhwhxhuflVusdSmTTTMEOSu5QxB5+XgKbLdX2Ojq5JvdymG2Eqd/Fb3ZLpn3JD1/6T59PzqW6lRX2rG0fOMM2c0DLdpc2YZoiJOMMF/F4UTMWurRZAmJ0wCxON/wD7H71ySsXHY2i6Lt56IZZo0VnZtqgFm5wCB15pBrjvE47QW10rxoVWOJh0TPT51z2zt7iPQ3EwKjeknB64PQ/Tmq+uuG60KS0nyZBtZX6dD6Vs6CqKjl9jb4JzzHo9GS+Or2dvdQNtwAzRuucrjPB8DQ8soBBPX18apvYzVVtbs2blT7uYzjGfMVYb25it5yGkzByVfH/j/T50n1LS5kpxG6SfEoMaXuLiASkgyRDa3mR4GkGoXSwxtuOAPGmdvqFlbx3L3rujrED3J4LDHWlEZ0u/tZZWO5kUMyFijKPQ1XlpdzUmXadLfGtxx10JU1QGcDdnnzqx2MwkhB8arN92fk9oin0VmvreVd6hcd4nmGXOftVi7F6bd6xI0UcbpFE2J5XGO79Mf4vSiv0ia+AiE5Qk1ZxgKI5PjgVw9mr8gceHrXoNv2f0q0QRMnenPLyctn0HhW9YtptQ0lhexlZVbhooixHPkOaqrSTXkGWvg2opcHmE8IRsLUsCcZJrucBZmjOcqccrtP2PSo2baKXLPTLsY+TcmC1ZQzyc1lMVfALZTrN/5oq9aO4SICvP7Bt0wq76Yx7pa0dWsIztHyx40wbg4qF4FkFQA+9mpRMEHPXzrPzg0JRwm2cCyVTuKFxnpUc85gkSO3Eska5ARZMe944+1TRXjT7Vj/ktuOJD0HP2qNhH7agCd4oc96cZKnzpbbbMLV375fHoin1mS3lJlBlBdmdGP5Y8KG/j9/e32xZBFA8oOFHKeQ3dc+FMWVb23LRxu4fgq2Pd9a1Z6e9tbxmNUYHI2LznPjn88VMdkV1yUsHc+s6n7TEpdYgcopK+vX59aj0iUS3/AH+SQzMG5GW/vmgr8PDdwyEbsKGXd1xk8+XQjiuYJVtow7KdsuRznAJOcdevrXOGYcEMP7lJ7+GK3XuhJIAFydykHqcnHjSe6a8kv7m0kUh42ZCDwB/fWp7fUJ4L5ZFAMkb5XPWm+o+zTMdQlcRuIcEDHLjrx48UcMR4JRSPZ3e5IYZVeSF8qsenXTxRCWXKQkbVj3cH50meUGTvYg2AcqGOT98U3uI7OW2huzP7rKN0Q+LdTbFuSyEHWlyGuVW2LMMYCnkY6k1JYazH7VJHtkkZjtCAZxjxx08R9qHtYO5CTQkFsAkFsEj1qr2V8+n9pJtxH+86H16UehqhOxpjqUnnJa7nV7i9n/g+rlPZWJRgqcgY8M9KpOp6W+iao9ldESQNloZM43oeB9R4irN2vtjO9rqKM0aNw6xt1OfOjNc09e0nZlZrXi8thvTnJzjkZxz863owUVwWcpYwUeEdxdRXaMN8eFRQvT1/1q9Nq1uJ4ZdYjGzuxsVPi9CR0qg2M2+eMldoQ8rgAgjwq8WV5aSWbrOYJCQN8dwvxAf4T51Vvk8qLNz06iDg7WsvoSajaNPdSzW117Rbtz3ufeK+RHnnwo89npR2dW9trhZJ3ZVeMjbhTnofpjHyqKN9Ls++isXupPaABJHJGGZGHPBGOPp5VrUtWmj01rRmEEBC7BjLFlPBB8fEEVWk3nGBeq1esrsxBcf7N6DdzR6h7MwLBxjechkI6EHwxXovZXtLbzwezGTvLnnJIG529fPp415Zo6vdTNJPcmFV+NlB4B8+ab2VmdF161mW7SeBiH7xR4DnBosYTL+ujC+rM1zg9SmuLi4lU20yqAxLqDyfQnHTzqxWMm1dpYNk48sHHPFVywvI2ESkKC3xY45/1xTaykGA7fEHJJ9cUenj5PIzWGJe3VnBcadJeYIuLcMyuFHvLnoTjOOteaPOpGPGvV9ZRbmwvrdFZz7MyA58TyBj1614q0ndH+awBx0qpq6czyjV9PsbrafgPwG55rK4iJKDnB8QeDWVUcZJmikmU6wwswNXDTbhe7UZxVTjt3DZplazumBWjqI71wY+ln7byy2LMpPFdvJBFC8tz3hUDACLkAnz+3hSe1mLEE02t5bckLcsQpB8cDPhz51nyhtXJb1d6dWUavZY+N8gK4J2RLnYp8SvHnSq0uGAmYzgw4Pwjnk9eOnnTG8Kr30c4h72U4Xa25seRA4A+eKBsdOMNjds8uUERyCm73vDkVEElHk8+E6HqtvBaukshM4BIyu4YHP981wvaGW3cXOzdbA7AjNjJ6ZXz55NIY2aS3Npbwu1xk5YN1HXAqbQ1tZrWW2vmdo45s92RyowfyBqz7MOweji91+a6Eh7sIGbw6L4faiJp5DZ2UcdtIGZMqR+PzP5UzmjsZrN7dYYDAoUqyHlSM9fHp+lcQWz21mk9rAt3LDlUbd7wB9M+FG4LCwgcnFhFqEu1XjAVfedmODj+tSagH9jVd4DtKVUA7nxjxFA21zdQxPLLBMjBCC7qRtXxODQFnem21aKaVzKpYMQTzzx96Uq5NtheA6HStYaQC1tyVPBWddq/c9K4F3p8Mxt9QV4biJiroh3If8AuBoyfW9V1QSW9qncIoIBLYOQcDJPQVmi9nLYNL7Tcl7wEFmABC/L+tPjxDNhZq1KisTimHQXVvLaEWTAhlChhIdy44PBH6Gq32ugSK5tb2KQSLKuyXapBVl6Zz4kH8qaanpqWL9/pl0GlX3mQkDdx4etTaNe2etE213GqztkZboT5Y86OmMYy3RNKqnS6iOa+JBOiTx65oItmZlaLdlTjDHBobsvqbabqAtZ3wrPwWPCnzrqDTJ+zl/7ZYxvNas22WFDyPl/7/Sou0wSVRqtvFIgkGGRk5Vh9f7xWnGWVwVLa3XPbJA/brQ/4ZqsWpWSf7BeON23/huf60iDt0PBU+fQ0Ze9ob+6iFlEGlSQCP2YJu3HPGAOc+VCajp2qaYwGoWE9uz8jcmR9xxSbo5aNT0zUOpSjJjez1O3ht+79li34wHJO71qWbWbS6sxZ6hC8kQbcjx43xt4sCT5+FVpbjcAD1HXNM4NF1a7tu/t9NupIsZDLGfe9QOp+lVJYh+zwbPvQnHk4lvoobSS3tEb+Y+55ZMbto6Dj+811b3UiRRozncFJGfAZ6flS4xsHCyh0YPhwwwR6Yq5dn4dM1e0nt5baKKQe5DcBsMrY93n5jGKmySSMrW6vYsfY50TUZJSmXyrHk56c4/evQop9ydBzyRnnrXlGm6hHpTSboDIykjaCAAfL96gtu0uqi5e6tZ1WdgA0bHKefieMZrq7NvRgWzTfB6lqdythFcTl5MiN5pH4wPAAedeJXd2ZQySo5EjZjYrt4zVhj12/eUtc34uTMpKxrygGec+Q9eKg1Se1vl9muQsLjgSw4OzgdPT6VErFv5QNeodaaXkquoy395eyPa7VRcKQjbRnHNZTCz0R7O4nSG6e4gYKY3RPn1HnWVY9yH8LCtTXYxWzQr0qKS0VfhppHZX3s8k3sk3dx/ExQ8UEZN+NvOemPGsyE5RfJdvsrceDLZQGCswUH8R8KImuILdnjtSzzgbS7YGw48KHUODko2PHik0xeC7cSZyWLbjxnrRKO/LM6+5uKimPIO8X3kndPxER4BJ9T1o25FvsjMMkrSfjOcnOPnSWG6JQsGyTxxwad6RAmoCVWdB3aZbd4j1pM1yVq5RU/8A0WUAWyrc6hH3RwqxgAjyH79aN7RWJh0wXkYBy+Hy2CTjx86Hklg7OatExIMUmXjB5x1yDQPaTtDDdxOoZlMp+HPGcYzTYbnYsLgOUFKTlWsIjiumWyO90ZFT/djghs5zwBg8/amGiq15ZypKzojSBlGeQMAHFVSytxLAwjlcqGDMCeRVv0fUY7GTDx7srjFWrfiavpOhhqJSnPnaWG10S0uLfuu/ZdynBLZx881XL/svIHElu8cjwDhJBg/P1o+81m0EJMKushbOCeAPKt2/akxooaNH+Y8KrpyNm70yqxNuIPDNN7LG10qlk908fEM+IqOwlD38qK+12UjaB+tLdevj7XDPAxRJSR3ak4zTfs7E7wz3xwxlcAbuPd86KXETyWp07oscH4GEtnBdTR7jiXusKnjx4nyGcVXr+2023vxL30qSofeMZHUeGfGnmqM1jaNK8mZpDtUHg5I/1NUORp76+WC3BeSRuFLfvUUxk32a/penrjD8i3rwWtdZ0xpFPeXIPiW59KYTi2vdJktbeUSQ892AeYwfA/tS+DsnadwhvZLqF9oJKJnGep8uPPijLXs/p9s7tFrEsZVgpWWHG7PH1605W7HwzRsnpdTHbPj+noug6RYdmdDt44giOUHfXBGWdyPE+XlRmla9aXN49sp4A4bGC1ItL1axtbKPRdQuPaZeRvLDLjzweaLs7zQ7GOaXTO6kkQ4JLDin+6ny2Yk6trcUC9suzOiXt5b6jJBGlxDIO8CDAlHhu+vOaniuEjjznAHwgcYqvakb2/lklF9bd0XG8958NGq0UKobm7iCBchuSrDzrz/qldmosTj0aWmUI17ZvkG7R9nrPtMsUkwFtPG3M6Ly6+R+uDmlr9i7rTbIrpUvtsYfvHBIEnHTjxqyreQAhY7uANKmUzwSPDFDRXaCQL7dHHIX2qrAhs/Lmk0y1taUMZRFtVVq7PLNQjuYdRlhXcneTkkMcEfMeFMrWUENbuY5kAJZB+ufP5V6BqFpoGqy79TNvcXMQI72IkSJ67hjp9arFp2QtoZJwmvRGMTEJ/LJcrj4fU9eBWvCx2R5WGZFumcX8eRAthZx3UntCbY/+HHn0HJPU9a6kdLZRdqquIsgIxyuPT+807uOzEBzG2oXJYZyEgDd2vXJ8FbHhVXmsZo5mEEMjRlj/MlYHIxgbhnGTTlBy7Yh6ea7DYu0NrcM6xsyhDn3CF6/T0rVV6x0KKVH9tM6yKeka5ArKdspXGSVSeq2eh6jb2qS3Gqy26ICQIiTt8fP9jS6Kz/i+p3CIQrj/d3Bg299x+LHj6jrXoM6xNEA6ArjG2oYZrS1YYiVV+VU9pre3Bxxg8y1Owu9OmEV3GoPVWHwv8jS9IJruRUhVZCxPuuRxgZ+/NX/AP8AkOa0uNIUIVSXeCjD88VSrGzcRm4dSNx5PTHFaGl0crOfBU/Ac3w8Iq+oSS2AhuEhxHJyQAfDP2rLbtK0JTD4AGM4wf8A39au+mwQX1z7NMwUOM9M9PT1qt9tezMVrIxtwBKBuwPxj+tWbtGorEjrNE6+E8ld1vVpNSkAyHCk4IGPtRWndmtSvEWaeRYE/CZTz9qYaFo8NlPDLdMHmOCQRwlXHUL/AE72RYbdC0g6s1UZXxgtlZqab0iTxK7jPj/ogt9NWwAc7pUY7idmA3GKVTXbxTyRnIAPGTnj0p82ot7M8DnMbcgf4T5iqnrB6Mp+HpUVvf8AsWVp/wAKTlW+Ap7xiCuc+tRd82AS1LrDvrqZYlGc9T5VbLbs0ksIeSaQA9Gxx8qKyUK3hlnT22aiO6JWLvUpJLiFVcoIzkN5Hzqz3mvpPZ21nboYVzy6S5LUTJ2Z099oSMMV+IlduflzSfVezbPbNc6bDNiHliikqPqOlB7lVrUUY2r9M1D3XSwMb/WBdWsVhLN3k9u3vcnI93jnx61XvaIEinQcXcjDB/wgeA+v7Ut0yeX+KIzsWeQ7WJ6mur2RUvJVcgYJwR6U9U7HhCJXZ0KgvDLhoeoXZjDfxiRGU4KvOMemFxk/U01Gq60k7iK4gmlI/EiM+M+Q8PrijbDsBb2fZf8Aieo3Mpu5kBEahdkZ6gcgkn1oXVuzkmnXULXcaR+0Kdh9qyX+gGfsaROvDBrsyuQK41rVo7YQewWQQgqY9mcj/pBJH0IFST9o79WBu9NsgEHws+09Ooyf1zS72S79oMFpe92vgkZkf8iq/rXUy6rbQKLaWZhj8dntP/kSa7bH6Cy10bTtZcFwp062wuQmBtUD5fCftW17a36d7st7ZXk5L7d27HQEHI+2BS/bdKzS3EsTSj/MmTH2NCsb67ZlBVox17hcgfapUIsjdIZL2yv4kkKQWytKSXIU+8cY6EkfYCuD2z1Bo0SOO0iXGGVIgQR67s/kaUSxywDaE9Peix+dQSK+QX2YHhkYo1CJDkx0O1mqIqRxyLDCmMKiLs+e05H5Vq57X6y+9zeEg8iNgGQfJW4B+VIWd8naufkM122/Yd2CP+YY/fNFsiC5sYDXdUntu6Nw7LkcHwPp5fTFSIL+6mzLdOGce+ePh8M+NCRW5SBJMkbiAMI2PvnP5U3uNPawUb2jZpEUqULZx1PBqHhdICUngYQSQwxrHuyFGMvyTW6RknPxVlUnTl5yJyem3OusikK/FJLvtE5J3P8AKq9NqLOvutkfOlFzcs2dzgCuhW2bDtUUWw3H8RkhMrFo1xuxTu/1azi072eKMEjqhHxn+/09apehyPdxkxSSBYxglU4J9T0AoW71Ql9m8OAMbj5+NehplXGtQz0LlbF4YyW+NrOZVk2zeDD8PzqLVNXN0qbzwPufmar1xeBmwTn0Joa5u22qoPPHFTbamgXqIrkcQahuwc9DipXvCeh/OqyJpEkJk4JPnU63fHB+9ZUtOk+EXq/Vd0MMbPdkdT+dLr6dXQjPWmml6RNdmO4uGWG3yGO/kuPQeXzoXtHEsuqRww27wqYwfdQ+/wAnkD8q6Dgp7UUtR6ipJxIdAk2zPjGdtWy11+6tY1jBVkHIVhVdXR2trdJoRdmXksGiwAMUKt7vAJIoLK1Y9yL3pvqNap9uRYbnVJriQyFyGPQDpXqNjqml2HZe29nkR0aDBjBHvsR72R55zXh/thT3gflXrnZzshBL2dsnlcm4uEE8jjnG4fD9KKurawPU9TG2KSYjtf8A4z0zWL6a9ttSltrU++sKKMofHDHw8hirzpfZbs1pVu1iNOheULuMkuHaUHxyfGig+ndn9Oc3TLCgbIUvlpAB5CqfbdoRr/aeCKKVoy5J4xkIAf3xVht4MJLLCu1uvWsemGxhn3vnCxqpG0epNecar2l1Gee2NxKzrGcqQwyPA/fpXqet9mdNnlae5u41i+JgxBJHjXmHbv8Ahnt0P8HjBSMbSY1+L6edKUcvkbn6HMV3GZYi9xbe8eVe7mP/ANCvPyzUN8scQZGiw4PIbTZs+mOcVDDeGC1iSa5eKRlDbH1Bo+PkR+hrNTurRVYCeADP+fKn5Dj65pW3DG54J7l8x4G4DYMj2mCMj5q3IpfYhZRKcCTaR8Ke0kfPu+lHP3j2iNHGzp3Y2lI4HX6Z94fWldhKymZpyFCngMNuPrH0+tSlwQ3yCamEW5XKbcnxt3U/n0ri8ZWi/wB4hPgfaUaorqdJ70CNkJB698zf/qpdQMkcI3Iw3eYhP6UzHIDfABDGWGcbueqrvH5UZcxsIlBSQbv+QD8hz96CtwzDlN3P+ST+lEQgXWoRwYVYgcPsG0ev95o8A5HFnp11d9zFBbyYDZZjE0YHHn41fz2Rh1WyDqz+0oPg3FQRx+dRaZd2Om6aNpRVwq7QOhI/piirztJb6VdJPvDJhQEXpjnmmKpPslrJTJ9MsIZnimtrxZUOGGW4Nbqzatr+iX9wJprVXJGQy4BIIHWsrvaiDtZ5q+muq49tkPpsodtIVh71zKxPiF4xTTYzI2+QjjgIoND+wyMM94T9KQpMa4xZIY7aysCtqWSQry3QuenSq0Z3B6cjjpVlGlBl/mNtz4gZx+dSJpNocqs00jegwBRRnjlke2/BW7SGW6ZzGBlF3tnjj0p1aGzRlsWjWQTApLN3XK56cny4ph/CICh4cYHUgZP161DLZd0MoGAPmP2qJz3Ay08n5DtN0KxjMax3kTq4yAxGf6VJeyabayRw+yQSEMQzdwG4HGc4+tIxDN3hGxwfPGP0rrFyRt2sH/xYzn8qrutuWXIH8b+jy/uokRUt7vY7L8SpuUL6+VIVutUikeOznCwAnAcL09PL6VLGtySEkYf+ANdm2YjG77KBR107FxyCqYJ8jFr8fwz2dXCsUKtls9QRketJf4fZsA20Nkf5+39qLSxPAZZTkgcf6V3JZKjbELNj04+tdCGx4iWK64RQqmsbQfBIV8fjyKsGn9o9dsNOjs7eR2t40CxtnDBR09KCWxckOD08MUdHOUTaeceLc05bmRPaJL+51S/dnuG3Nngyv0+lLrSPUba7W4gk2yr+INVrNw5HuxjnqwHStRhg+9gG9aPEkL+L7YrvdR1aZQsxkIbwDcGlBiuZJcvIsePPkVbpUeQc8ACojYAjjOfXpUfL6OxH7BdP1q4toxHcXCToo4DL1/b8qNvO0j3RIu4I5EVsruQE/mP0xUYh2ja0I2j1rJLNJhzHx4dBS3BvnAeV1kE1HWkntRDHp9s8SdC0IB+/X86C03W2sAUt9LjUMcsyud3THB8PlTU6asnAiOPH3q0ujlASkYwDnG45NSlhYwQ1/RRJfJ7QLgWcrtnIExLD7E80HfTvdy72sI0J/wApNv6VYBoo3BzAxHXb3mMVNFo0UuXKyIfACTgUaz3gDC+yuRpNKmHhjUAYwyHBrcZltLhX4xjldpx+tWGLSEDtvEmF8iant4LSECWUS5J+HdXYkTiP2I313/Znt5ZOj714oSfWTccSMW8BVxj9jILNDuOfEtxUy22nYzNZcnocZzRLK8HZ/pR45WlyyGQDpwK3XoUFvaxJxBIgPkKyp5By/sRbRINrZxjzrlQN3y9flWqylDSZ2JbB5wvHPrUgKiAsI0z8vlWVlAxsTpSXj3E4J54rpIwy5ZiT61lZSmGQzOY0O0D546V3FKwIHBOSMkc1lZUBZIb59vvADNCiZ8cHHqKysqzHorS/Y4nnkWLh2yQOc1wkrswBPHPFZWUHkYbkkZXVVOBXccz4I4xg8VlZRoTMnEh3HgdR4ViyNnHGKyspgC7CW6125O8jPAGf0rKyuOZk5JypPGD4CttwmeuPOsrK4g4M7gLtwOM8UVC5aPd0OfCsrKIgLySR86yVQ2M9PkKysqDvBsKBEcZHXpXcSiZl3cZA6VlZRiWD3LNb744z+IncQM1FaXk+QCwIAzgqKysrjiSG+ncsWKn/ALRWVlZXEn//2Q==`;

    const categoriesData = [
        {
            name: 'Organics',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Fruits',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Vegetables',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Pizza | Burger',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Organics',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Fruits',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Vegetables',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        },
        {
            name: 'Pizza | Burger',
            desc: 'Lorem ipsum dolor',
            image: bannerImage,
        }
    ]
    return (
        <div className="bg-lightgrey px-4 lg:px-12">
            <ShopSection
                className="pt-12"
                headline="Good food Good Life"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
                btnText="Order Now"
                images={[bannerImage, bannerImage, bannerImage]}
            />
            <ShopSection
                className="mt-16 lg:mt-20"
                headline="Categories"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
            />
            <CardsGrid cards={categoriesData} />
        </div>
    )
}

export default Homepage