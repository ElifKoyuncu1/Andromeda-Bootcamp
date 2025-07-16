(define-map rewards
  ((user principal) (task-id uint))
  ((nft-uri (string-utf8 256))))

(define-public (claim-reward (task-id uint) (uri (string-utf8 256)))
  (let (
    (user tx-sender)
    (reward-key (tuple (user user) (task-id task-id)))
  )
    (begin
      ;; Ödül zaten var mı?
      (if (map-get? rewards reward-key)
        (err u100) ;; Zaten ödül alındı
        (begin
          (map-set rewards reward-key (tuple (nft-uri uri)))
          (ok uri)
        )
      )
    )
  )
)

(define-public (get-reward-uri (task-id uint))
  (let (
    (user tx-sender)
    (reward-key (tuple (user user) (task-id task-id)))
    (reward-data (map-get? rewards reward-key))
  )
    (match reward-data
      r (ok (get nft-uri r))
      (err u101) ;; Ödül bulunamadı
    )
  )
)
