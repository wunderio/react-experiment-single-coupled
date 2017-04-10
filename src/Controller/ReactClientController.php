<?php

namespace Drupal\react_experiment_single_coupled\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Session\AccountProxy;

/**
 * Class ReactClientController.
 *
 * @package Drupal\react_experiment_single_coupled\Controller
 */
class ReactClientController extends ControllerBase {

  /**
   * Drupal\Core\Session\AccountProxy definition.
   *
   * @var \Drupal\Core\Session\AccountProxy
   */
  protected $currentUser;

  /**
   * {@inheritdoc}
   */
  public function __construct(AccountProxy $current_user) {
    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('current_user')
    );
  }

  /**
   * Index.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
    return [
      '#theme' => 'react_client',
      '#placeholder' => $this->t('Loading client application'),
      '#attached' => array(
        'library' => array(
          'react_experiment_single_coupled/client',
        ),
      ),
    ];
  }

}
