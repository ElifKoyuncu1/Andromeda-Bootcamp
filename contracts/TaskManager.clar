(define-map tasks
  ((user principal) (task-id uint))
  ((completed bool)))

(define-public (complete-task (task-id uint))
  (let (
    (user tx-sender)
    (task-key (tuple (user user) (task-id task-id)))
  )
    (begin
      (map-set tasks task-key (tuple (completed true)))
      (ok true)
    )
  )
)

(define-public (is-completed (task-id uint))
  (let (
    (user tx-sender)
    (task-key (tuple (user user) (task-id task-id)))
    (result (map-get? tasks task-key))
  )
    (match result
      task-data (ok (get completed task-data))
      (err false)
    )
  )
)
